<?php

namespace ShopifyPlugin\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User;
use Illuminate\Notifications\Notifiable;
use Osiset\ShopifyApp\Contracts\ShopModel as ShopInterface;
use Osiset\ShopifyApp\Traits\ShopModel;

/**
 * @property int                    $id
 * @property string                 $name
 * @property string                 $email
 * @property Carbon                 $email_verified_at
 * @property string                 $password
 * @property string                 $remember_token
 * @property Carbon                 $created_at
 * @property Carbon                 $updated_at
 * @property Carbon                 $deleted_at
 * @property-read ColliverySettings $colliverySettings
 */
class Shop extends User implements ShopInterface
{
    use HasFactory;
    use Notifiable;
    use ShopModel;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function colliverySettings(): HasOne
    {
        return $this->hasOne(ColliverySettings::class, 'shop_id');
    }
}
