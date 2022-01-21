<?php

namespace ShopifyPlugin\ColliveryApi\ResponseManagement;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Collection;

class ColliveryResponseCollection implements Arrayable
{
    /** @var Collection|IsResponseComposable[] */
    public Collection $data;
    public Links $links;
    public Meta $meta;

    /**
     * @param IsResponseComposable[]     $data
     */
    public function __construct(array $data, ?\stdClass $links, ?\stdClass $meta)
    {
        if (count($data) > 0) {
            $classUses = class_uses(head($data));
            if (!isset($classUses[IsResponseComposable::class])) {
                throw new \InvalidArgumentException(sprintf(
                    'Objects passed to %s::%s do not use %s. Instance of %s given.',
                    class_basename($this),
                    __FUNCTION__,
                    IsResponseComposable::class,
                    class_basename(head($data))
                ));
            }
        }

        $links = $links ?: new \stdClass();
        $meta = $meta ?: new \stdClass();

        $this->data = collect($data);
        $this->links = new Links($links);
        $this->meta = new Meta($meta);
    }

    public function toArray(): array
    {
        // Use `Collection::toArray()` as it casts to array recursively
        return collect($this)->toArray();
    }
}
