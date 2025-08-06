<?php

declare(strict_types=1);

namespace App\Data;

use App\Enums\UserRole;
use App\Models\User;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use DateTimeImmutable;
use Illuminate\Validation\Rules\Enum;
use Spatie\LaravelData\Attributes\Validation\Rule;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Attributes\WithoutValidation;
use Spatie\LaravelData\Casts\EnumCast;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
final class UserData extends Data
{
    public ?CarbonImmutable $created_at = null;

    public ?CarbonImmutable $updated_at = null;

    public function __construct(
        #[WithoutValidation]
        public ?int $id,

        #[Rule(['required', 'string'])]
        public string $name,

        #[Rule(['required', 'string', 'email', 'max:255'])]
        public string $email,

        #[Rule(['required', 'string', new Enum(UserRole::class)])]
        #[WithCast(EnumCast::class, type: UserRole::class)]
        public UserRole $role,

        #[Rule(['nullable', 'date'])]
        #[WithCast(EnumCast::class, type: Carbon::class)]
        public ?DateTimeImmutable $email_verified_at,

        #[Rule(['required', 'string', 'min:8', 'regex:/[A-Z]/', 'regex:/[a-z]/', 'regex:/[0-9]/', 'regex:/[@$!%*#?&]/'])]
        public ?string $password,
    ) {}

    public static function fromModel(User $user): self
    {
        $userData = new self(
            id: $user->id,
            name: $user->name,
            email: $user->email,
            role: $user->role,
            email_verified_at: $user->email_verified_at,
            password: null, // $user->password is hashed
        );

        $user->updated_at = CarbonImmutable::parse($user->updated_at);
        $user->created_at = CarbonImmutable::parse($user->created_at);

        return $userData;
    }
}
