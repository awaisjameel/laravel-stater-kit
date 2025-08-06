<?php

declare(strict_types=1);

use App\Data\UserData;
use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public static function seedUsers(): void
    {
        if (app()->environment('production')) {
            return;
        }

        $usersDataList = [
            new UserData(
                id: null,
                name: 'Admin',
                email: 'admin@app.com',
                role: UserRole::Admin,
                email_verified_at: new DateTimeImmutable('now'),
                password: 'Admin123!@#',
            ),
            new UserData(
                id: null,
                name: 'User',
                email: 'user@app.com',
                role: UserRole::User,
                email_verified_at: null,
                password: 'User123!@#',
            ),
        ];

        foreach ($usersDataList as $userData) {
            User::updateOrCreate(
                ['email' => $userData->email],
                $userData->toArray()
            );
        }
    }

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table): void {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('role')->default('');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table): void {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table): void {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        Schema::create('personal_access_tokens', function (Blueprint $table): void {
            $table->id();
            $table->morphs('tokenable');
            $table->string('name');
            $table->string('token', 64)->unique();
            $table->text('abilities')->nullable();
            $table->timestamp('last_used_at')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();
        });

        self::seedUsers();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('personal_access_tokens');
    }
};
