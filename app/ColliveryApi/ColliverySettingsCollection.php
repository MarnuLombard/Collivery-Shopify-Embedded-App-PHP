<?php

namespace ShopifyPlugin\ColliveryApi;

use ShopifyPlugin\Exceptions\PropertyDoesNotExist;

/**
 * @property-read string $appVersion
 * @property-read string $baseUrl
 * @property-read string $appName
 * @property-read string $appHost
 */
class ColliverySettingsCollection
{
    public string $userName;
    public string $password;
    public bool $riskCover;
    public bool $excludeWeekends;
    public bool $rica;
    public bool $consigneeOnly;
    public bool $smsTracking;
    public int $discount;
    public bool $freeShipping;
    public int $freeShippingMinimum;

    private string $appVersion;
    private string $baseUrl;
    private string $appName;
    private string $appHost;

    public function __construct()
    {
        // These are not user-configurable and are not saved in DB
        $this->appVersion = self::getDefault('appVersion');
        $this->baseUrl = self::getDefault('baseUrl');
        $this->appName = self::getDefault('appName');
        $this->appHost = self::getDefault('appHost');
    }

    public static function fromDatabase(?\stdClass $settings): ColliverySettingsCollection
    {
        $self = new self();

        $self->userName = $settings->userName ?? self::getDefault('userName');
        $self->password = $settings->password ?? self::getDefault('password');
        $self->riskCover = $settings->riskCover ?? self::getDefault('riskCover');
        $self->excludeWeekends = $settings->excludeWeekends ?? self::getDefault('excludeWeekends');
        $self->rica = $settings->rica ?? self::getDefault('rica');
        $self->consigneeOnly = $settings->consigneeOnly ?? self::getDefault('consigneeOnly');
        $self->smsTracking = $settings->smsTracking ?? self::getDefault('smsTracking');
        $self->discount = $settings->discount ?? self::getDefault('discount');
        $self->freeShipping = $settings->freeShipping ?? self::getDefault('freeShipping');
        $self->freeShippingMinimum = $settings->freeShippingMinimum ?? self::getDefault('freeShippingMinimum');

        return $self;
    }

    public static function fromDefault(): self
    {
        $self = new self();

        $self->userName = self::getDefault('userName');
        $self->password = self::getDefault('password');
        $self->riskCover = self::getDefault('riskCover');
        $self->excludeWeekends = self::getDefault('excludeWeekends');
        $self->rica = self::getDefault('rica');
        $self->consigneeOnly = self::getDefault('consigneeOnly');
        $self->smsTracking = self::getDefault('smsTracking');
        $self->discount = self::getDefault('discount');
        $self->freeShipping = self::getDefault('freeShipping');
        $self->freeShippingMinimum = self::getDefault('freeShippingMinimum');

        return $self;
    }

    /**
     * @throws \JsonException
     */
    public function toDatabase(): string
    {
        // Do not modify the internal state of this object just to cast it to string
        $self = clone $this;
        unset($self->appVersion, $self->baseUrl, $self->appName, $self->appHost);

        return json_encode($self, JSON_FORCE_OBJECT|JSON_THROW_ON_ERROR);
    }

    public function toArray(): array
    {
        return [
            'user_name' => $this->userName,
            'password' => $this->password,
            'risk_cover' => $this->riskCover,
            'exclude_weekends' => $this->excludeWeekends,
            'rica' => $this->rica,
            'consignee_only' => $this->consigneeOnly,
            'sms_tracking' => $this->smsTracking,
            'discount' => $this->discount,
            'free_shipping' => $this->freeShipping,
            'free_shipping_minimum' => $this->freeShippingMinimum,
            'app_version' => $this->appVersion,
            'base_url' => $this->baseUrl,
            'app_name' => $this->appName,
            'app_host' => $this->appHost,
        ];
    }

    /**
     * @return mixed
     */
    private static function getDefault(string $property)
    {
        return (new DefaultColliverySettings())->{$property};
    }

    /**
     * Make the private properties read-only
     * @throws PropertyDoesNotExist
     */
    public function __get($name)
    {
        if (property_exists(self::class, $name)) {
            return $this->{$name};
        }

        throw PropertyDoesNotExist::make(self::class, $name);
    }



}
