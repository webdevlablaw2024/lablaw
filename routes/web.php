<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InternshipController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\OverviewController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/show', function () {
    return Inertia::render('ShowArticle');
});
Route::get('/halo', function () {
    return Inertia::render('Halo');
});

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/soon', function () {
    return Inertia::render('ComingSoon');
});
Route::get('/admin', function () {
    return Inertia::render('Admin/Internship/Applicant');
});
Route::get('/news', function () {
    return Inertia::render('NewsPage');
});
Route::get('/about', function () {
    return Inertia::render('AboutPage');
});
Route::get('/team', function () {
    return Inertia::render('TeamPage');
});
Route::get('/internship', function(){
    return Inertia::render('InternshipPage');
});
Route::get('/position-detail', function(){
    return Inertia::render('PositionDetailPage');
});
Route::get('/form', function(){
    return Inertia::render('FormPage');
});
Route::get('/news', [HomeController::class, 'news'])->name('news');
Route::get('/news/{id}', [HomeController::class, 'showNews'])->name('news.detail');

Route::prefix('admin')->middleware(['auth'])->group(function () {
    Route::resources([
        'overview' => OverviewController::class,
        'article' => ArtikelController::class,
        'member' => MemberController::class,
        'position' => PositionController::class,
        'applicant' => InternshipController::class,

    ]);
});

// routes CRUD artikel
/*
Route::get('/artikel', [ArtikelController::class, 'index'])->name('artikel.index');
Route::get('/artikel/create', [ArtikelController::class, 'create'])->name('artikel.create');
Route::post('/artikel/store', [ArtikelController::class, 'store'])->name('artikel.store');
Route::get('/artikel/show/{id}', [RatingController::class, 'show'])->name('article.show');
Route::get('/artikel/edit/{id}', [ArtikelController::class, 'edit'])->name('artikel.edit');
Route::patch('/artikel/update', [ArtikelController::class, 'update'])->name('artikel.update');
Route::delete('/artikel/delete/{id}', [ArtikelController::class, 'destroy'])->name('artikel.destroy');
*/  

require __DIR__ . '/auth.php';
