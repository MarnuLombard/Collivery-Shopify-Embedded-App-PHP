<?php

namespace ShopifyPlugin\Services\Typescript\Formatters;

use Spatie\TypeScriptTransformer\Formatters\Formatter;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

/**
 * Because the default \Spatie\TypeScriptTransformer\Formatters\PrettierFormatter requires `prettier` to be on the $PATH globally
 */
class PrettierRelativeFormatter implements Formatter
{

    public function format(string $file): void
    {
        $process = new Process([base_path('node_modules/.bin/prettier'), '--write', $file]);
        $process->run();

        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }
    }
}
