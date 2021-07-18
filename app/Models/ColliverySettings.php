<?php

namespace ShopifyPlugin\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use ShopifyPlugin\Casts\ColliverySettingsCollectionCast;
use ShopifyPlugin\ColliveryApi\ColliverySettingsCollection;

/**
 * @property int                         $id
 * @property int                         $shop_id
 * @property ColliverySettingsCollection $settings
 * @property Carbon                      $created_at
 * @property Carbon                      $updated_at
 * @property Carbon                      $deleted_at
 * @property-read Shop                   $shop
 * @property-read array<string, string>  $headers
 * @mixin \Eloquent
 */
class ColliverySettings extends Model
{
    use SoftDeletes;

    protected $casts = [
        'id' => 'int',
        'shop_id' => 'int',
        'settings' => ColliverySettingsCollectionCast::class,
    ];

    protected $guarded = ['id'];

    public static function createDefault(Shop $shop): void
    {
        $colliverySettings = self::create([
            'shop_id' => $shop->id,
            'settings' => ColliverySettingsCollection::fromDefault(),
        ]);

        $shop->setRelation('colliverySettings', $colliverySettings);
    }

    public function shop(): BelongsTo
    {
        return $this->belongsTo(Shop::class, 'shop_id');
    }

    public function getHeadersAttribute(): array
    {
        return [
            'X-App-Name' => $this->settings->appName,
            'X-App-Version' => $this->settings->appVersion,
            'X-App-Host' => $this->settings->appHost,
            'X-App-Lang' => 'PHP',
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ];
    }
}
