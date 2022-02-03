<?php
/** @noinspection PhpUnused */

namespace ShopifyPlugin\ShopifyApi\Models;

use Spatie\DataTransferObject\DataTransferObject;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class ClientDetails extends DataTransferObject
{
    public string $accept_language;
    public string $browser_height;
    public string $browser_ip;
    public string $browser_width;
    public ?string $session_hash = null;
    public string $user_agent;
}
