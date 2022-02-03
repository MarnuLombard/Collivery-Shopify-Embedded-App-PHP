<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class ExtendedAuthorizationAttributes extends DataTransferObject
{
    public string $extended_authorization_expires_at;
    public string $standard_authorization_expires_at;
}
