<?php

namespace ShopifyPlugin\ShopifyApi\Models;


use Illuminate\Validation\ValidationException;

class Province
{
    public const EASTERN_CAPE = 'EC';
    public const FREE_STATE = 'FS';
    public const GAUTENG = 'GP';
    public const KWAZULU_NATAL = 'NL';
    public const LIMPOPO = 'LP';
    public const MPUMALANGA = 'MP';
    public const NORTH_WEST = 'NW';
    public const NORTHERN_CAPE = 'NC';
    public const WESTERN_CAPE = 'WC';

    public static array $codes = [
        self::EASTERN_CAPE,
        self::FREE_STATE,
        self::GAUTENG,
        self::KWAZULU_NATAL,
        self::LIMPOPO,
        self::MPUMALANGA,
        self::NORTHERN_CAPE,
        self::NORTH_WEST,
        self::WESTERN_CAPE,
    ];
    public static array $names = [
        self::EASTERN_CAPE => 'Eastern Cape',
        self::FREE_STATE => 'Free State',
        self::GAUTENG => 'Gauteng',
        self::KWAZULU_NATAL => 'KwaZulu Natal',
        self::LIMPOPO => 'Limpopo',
        self::MPUMALANGA => 'Mpumalanga',
        self::NORTHERN_CAPE => 'Northern Cape',
        self::NORTH_WEST => 'North West',
        self::WESTERN_CAPE => 'Western Cape',
    ];

    public string $code;
    public string $name;

    /**
     * @throws ValidationException
     */
    public function __construct(string $code)
    {
        if (!in_array($code, self::$codes)) {
            throw ValidationException::withMessages(['code' => $code.' is not a valid province code.']);
        }

        $this->code = $code;
        $this->name = self::$names[$code];
    }
}
