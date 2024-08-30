"use client";
import { useTheme } from "@/context/ThemeContext";
import { translateText } from "@/lib/translateService";
import { useEffect, useMemo, useState } from "react";
const Laravelpage:React.FC = () => {
    const { locale } = useTheme();
    const [copied, setCopied] = useState(false);
    const [text1, setText1] = useState('Creating a CRUD (Create, Read, Update, Delete) application in Laravel 11 involves several steps. Here’s a detailed guide to help you set up a basic CRUD system');
    const [text2, setText2] = useState('Set Up Laravel Project');
    const [text3, setText3] = useState('If you haven`&apos;t already set up a Laravel project, start by creating a new Laravel project:');
    const [text4, setText4] = useState('Create a Migration');
    const [text5, setText5] = useState('For example, if you’re creating a bb table:');
    const [text6, setText6] = useState('Edit the migration file located in');
    const [text7, setText7] = useState('to define the schema');
    const [text8, setText8] = useState('Run the migration to create the table:');
    const [text9, setText9] = useState('Create a Model');
    const [text10, setText10] = useState('Generate a model for your table:');
    const [text11, setText11] = useState('The model file will be located at');
    const [text12, setText12] = useState('Ensure it looks like this:');
    const [text13, setText13] = useState('Create a ');
    const [text14, setText14] = useState('Generate a controller to handle CRUD operations:');
    const [text15, setText15] = useState('Edit the controller file located at');
    const [text16, setText16] = useState('Define');
    const [text17, setText17] = useState('Add routes for your CRUD operations in');
    const [text18, setText18] = useState('Create Views');
    const [text19, setText19] = useState('Create Blade templates for your views. Here’s a basic setup:');

    const textTranslate = useMemo(() => async() => {
        await translateText(text1, locale).then((res) => {
            setText1(res);
        })
        await translateText(text2, locale).then((res) => {
            setText2(res);
        })
        await translateText(text3, locale).then((res) => {
            setText3(res);
        })
        await translateText(text4, locale).then((res) => {
            setText4(res);
        })
        await translateText(text5, locale).then((res) => {
            setText5(res.replace('bb', '<code className="font-mono text-blue-600">posts</code>'));
        })
        await translateText(text6, locale).then((res) => {
            setText6(res);
        })
        await translateText(text7, locale).then((res) => {
            setText7(res);
        })
        await translateText(text8, locale).then((res) => {
            setText8(res);
        })
        await translateText(text9, locale).then((res) => {
            setText9(res);
        })
        await translateText(text10, locale).then((res) => {
            setText10(res);
        })
        await translateText(text11, locale).then((res) => {
            setText11(res);
        })
        await translateText(text12, locale).then((res) => {
            setText12(res);
        })
        await translateText(text13, locale).then((res) => {
            setText13(res);
        })
        await translateText(text14, locale).then((res) => {
            setText14(res);
        })
        await translateText(text15, locale).then((res) => {
            setText15(res);
        })
        await translateText(text16, locale).then((res) => {
            setText16(res);
        })
        await translateText(text17, locale).then((res) => {
            setText17(res);
        })
        await translateText(text18, locale).then((res) => {
            setText18(res);
        })
        await translateText(text19, locale).then((res) => {
            setText19(res);
        })
    }, [locale, text1, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text2, text3, text4, text5, text6, text7, text8, text9])

    useEffect(() => {
        textTranslate();
    }, [textTranslate])
    const handleCopy = async (text: string) => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
          console.error('Failed to copy text:', err);
        }
      };
    const codeblade = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show Post</title>
</head>
<body>
    <h1>{{ $post->title }}</h1>
    <div>
        {!! $post->content !!}
    </div>
    <a href="{{ route('posts.edit', $post->id) }}">Edit</a>
    <form action="{{ route('posts.destroy', $post->id) }}" method="POST">
        @csrf
        @method('DELETE')
        <button type="submit">Delete</button>
    </form>
    <a href="{{ route('posts.index') }}">Back to Posts</a>
</body>
</html>`;
    const bladeview = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Post</title>
</head>
<body>
    <h1>Edit Post</h1>
    <form action="{{ route('posts.update', $post->id) }}" method="POST">
        @csrf
        @method('PUT')
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value="{{ $post->title }}" required />
        <label htmlFor="content">Content:</label>
        <textarea name="content" id="content" required>{{ $post->content }}</textarea>
        <button type="submit">Update</button>
    </form>
</body>
</html>`;
    const createView = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Create Post</title>
        </head>
        <body>
            <h1>Create Post</h1>
            <form action="{{ route('posts.store') }}" method="POST">
                @csrf
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" required />
                <label htmlFor="content">Content:</label>
                <textarea name="content" id="content" required></textarea>
                <button type="submit">Save</button>
            </form>
        </body>
    </html>`;
    const indexView = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Posts</title>
        </head>
        <body>
            <h1>Posts</h1>
            <a href="{{ route('posts.create') }}">Create New Post</a>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($posts as $post)
                        <tr>
                            <td>{{ $post->title }}</td>
                            <td>
                                <a href="{{ route('posts.show', $post->id) }}">View</a>
                                <a href="{{ route('posts.edit', $post->id) }}">Edit</a>
                                <form action="{{ route('posts.destroy', $post->id) }}" method="POST" style={{ display: 'inline' }}>
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </body>
    </html>`;
    const routeCode = `use App\\Http\\Controllers\\PostController;
Route::resource('posts', PostController::class);`;
    const controllerCode = `
    namespace App\\Http\\Controllers;

    use App\\Models\\Post;
    use Illuminate\\Http\\Request;

    class PostController extends Controller {
        public function index() {
            $posts = Post::all();
            return view('posts.index', compact('posts'));
        }

        public function create() {
            return view('posts.create');
        }

        public function store(Request $request) {
            $request->validate([
                'title' => 'required',
                'content' => 'required',
            ]
            Post::create($request->all());
            return redirect()->route('posts.index')->with('success', 'Post created successfully.');
        }

        public function show(Post $post) {
            return view('posts.show', compact('post'));
        }

        public function edit(Post $post) {
            return view('posts.edit', compact('post'));
        }

        public function update(Request $request, Post $post) {
            $request->validate([
                'title' => 'required',
                'content' => 'required',
            ])

            $post->update($request->all());
            return redirect()->route('posts.index')->with('success', 'Post updated successfully.');
        }

        public function destroy(Post $post) {
            $post->delete();
            return redirect()->route('posts.index')->with('success', 'Post deleted successfully.');
        }
    }`;
    const migrationCode = `
    // Example migration schema definition
    public function up() {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->timestamps();
        });
    }`;
    return (<>
        <div className="relative flex w-full min-w-0 flex-col">
            <div className="flex max-w-full flex-col gap-3">
                <div className="flex flex-grow flex-col">
                <div className="flex min-h-[20px] w-full flex-col items-start gap-4 overflow-x-auto">
                    <div className="flex w-full flex-col gap-2">
                    <div className="prose w-full break-words">
                        <p className="mb-4">{text1}:</p>
                        <h3 className="mb-2 mt-4 text-xl font-semibold">1. <strong>{text2}</strong>
                        </h3>
                        <p className="mb-4">{text3}</p>
                        <div className="rounded-md border border-gray-700 bg-gray-900">
                        <div className="flex items-center justify-start border-b border-gray-700 bg-gray-800 p-4 font-mono text-xs text-gray-400">
                            <span>bash</span>
                        </div>
                        <div className="overflow-x-auto whitespace-pre p-4 text-gray-100">
                            <code> composer create-project --prefer-dist laravel/laravel laravel-crud </code>
                            <code>
                            <br />
                            <span className="text-gray-500">cd</span> laravel-crud </code>
                        </div>
                        </div>
                        <h3 className="mb-2 mt-4 text-xl font-semibold">2. <strong>{text4}</strong>
                        </h3>
                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: text5 }}></p>
                        <div className="rounded-md border border-gray-700 bg-gray-900">
                        <div className="flex items-center justify-start border-b border-gray-700 bg-gray-800 p-4 font-mono text-xs text-gray-400">
                            <span>bash</span>
                        </div>
                        <pre className="overflow-x-auto whitespace-pre p-4 text-gray-100">
                                            <code>
                                php artisan make:migration create_posts_table --create=posts
                                    </code>
                                        </pre>
                        </div>
                    </div>
                    <p className="mb-4">{text6} <code className="font-mono text-blue-600">database/migrations/xxxx_xx_xx_create_posts_table.php</code> {text7}: </p>
                    <div className="bg-gray-900 rounded-md border border-gray-700">
                        <div className="flex items-center justify-start border-b border-gray-700 bg-gray-800 p-2 text-xs font-mono text-gray-400">
                            <span>bash</span>
                        </div>
                        <pre className="p-4 overflow-x-auto text-gray-100 whitespace-pre">
                            <code className="whitespace-pre">
                                {migrationCode}
                            </code>
                        </pre>
                    </div>
                    <p>{text8}</p>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                        <span>bash</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1" onClick={() => handleCopy('php artisan migrate')}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="icon-sm"
                            >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                                clipRule="evenodd"
                            ></path>
                            </svg>
                            Copy Code
                        </button>
                        </div>
                    </div>
                    <div className="p-4 overflow-y-auto text-gray-100">
                        <code className="whitespace-pre">php artisan migrate</code>
                    </div>
                    </div>
                    {/* ke 3 */}
                    <h3>3. <strong>{text9}</strong></h3>
                    <p>{text10}</p>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                        <span>bash</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1" onClick={()=> handleCopy('php artisan make:model Post')}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="icon-sm"
                            >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                                clipRule="evenodd"
                            ></path>
                            </svg>
                            Copy Code
                        </button>
                        </div>
                    </div>
                    <div className="p-4 overflow-y-auto text-gray-100">
                        <code className="whitespace-pre">php artisan make:model Post</code>
                    </div>
                    </div>
                    {/* ke 4 */}
                    <p>{text11} <code className="text-red-500">app/Models/Post.php</code>. {text12} </p>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                        <span>php</span>
                    </div>
                    <div className="overflow-y-auto p-4 text-gray-100" dir="ltr">
                        <pre className="whitespace-pre">
                        <code className="language-php">
                            <span className="text-blue-600">namespace</span> App\
                            <br />
                            <span className="text-blue-600">use</span> Illuminate\
                            <br />
                            <span className="text-blue-600">Database</span>\
                            <br />
                            <span className="text-blue-600">Eloquent</span>\
                            <br />
                            <span className="text-blue-600">Factories</span>\
                            <br />
                            <span className="text-blue-600">HasFactory</span>;
                            <br />
                            <span className="text-blue-600">use</span> Illuminate\
                            <br />
                            <span className="text-blue-600">Database</span>\
                            <br />
                            <span className="text-blue-600">Eloquent</span>\
                            <br />
                            <span className="text-blue-600">Model</span>;
                            <br />
                            <span className="text-blue-600">class</span> Post
                            <span className="text-blue-600">extends</span> Model {'{'}
                            <br />
                            <span className="text-blue-600">use</span> HasFactory;
                            <br />
                            <span className="text-blue-600">protected</span> $fillable = [
                            <br />
                                <span className="text-red-500">{`'title'`}</span>, 
                            <br />
                            <span className="text-red-500">{`'content'`}</span>
                            <br />
                            ];
                            <br />
                            {'}'}
                        </code>
                        </pre>
                    </div>
                    </div>
                    {/* ke 5 */}
                    <h3>4. <strong>{text13} Controller</strong></h3>
                    <p>{text14} </p>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                        <span>bash</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1" onClick={() =>handleCopy('php artisan make:controller PostController')}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="icon-sm"
                            >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                                clipRule="evenodd"
                            />
                            </svg>
                            {copied ? "Copied!" : "Salin kode"}
                        </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto p-4" dir="ltr">
                        <code className="whitespace-pre language-bash">
                        php artisan make:controller PostController
                        </code>
                    </div>
                    </div>
                    {/* ke 6 */}
                    <p>{text15} <code className="text-red-500">app/Http/Controllers/PostController.php</code>: </p>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md">
                        <span>php</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1" onClick={() =>handleCopy(controllerCode)}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="icon-sm"
                            >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                                clipRule="evenodd"
                            />
                            </svg>
                            {copied ? "Copied!" : "Salin kode"}
                        </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto p-4" dir="ltr">
                        <pre className="whitespace-pre">
                        <code className="language-php">
                            {controllerCode}
                        </code>
                        </pre>
                    </div>
                    </div>
                    {/* ke 7 */}
                    <h3>5. <strong>{text16} Routes</strong></h3>
                    <p>{text17} <code className="text-red-500">routes/web.php</code>: </p>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md">
                        <span>php</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1" onClick={() =>handleCopy(routeCode)}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="icon-sm"
                            >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                                clipRule="evenodd"
                            />
                            </svg>
                            {copied ? "Copied!" : "Salin kode"}
                        </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto p-4" dir="ltr">
                        <pre className="whitespace-pre">
                        <code className="language-php">
                        {routeCode}
                        </code>
                        </pre>
                    </div>
                    </div>
                    {/* ke 8 */}
                    <h3>6. <strong>{text18}</strong></h3>
                    <p>{text19}</p>
                    <ul>
                    <li>
                        <strong>Index View ( <code className="text-red-500">resources/views/posts/index.blade.php</code>): </strong>
                    </li>
                    </ul>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md">
                        <span>blade</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1" onClick={() =>handleCopy(indexView)}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="icon-sm"
                            >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                                clipRule="evenodd"
                            />
                            </svg>
                            {copied ? "Copied!" : "Salin kode"}
                        </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto p-4" dir="ltr">
                        <pre className="whitespace-pre">
                        <code className="language-blade">
                        {indexView}
                    </code>
                    </pre>
                    </div>
                    </div>
                    {/* ke 9 */}
                    <ul>
                    <li>
                        <strong>Create View ( <code className="text-red-500">resources/views/posts/create.blade.php</code>): </strong>
                    </li>
                    </ul>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md">
                        <span>blade</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1" onClick={() =>handleCopy(createView)}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="icon-sm"
                            >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                                clipRule="evenodd"
                            />
                            </svg>
                            {copied ? "Copied!" : "Salin kode"}
                        </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto p-4" dir="ltr">
                        <pre className="whitespace-pre">
                        <code className="language-blade">{createView}
                        </code>
                        </pre>
                    </div>
                    </div>
                    {/* ke 10 */}
                    <ul>
                    <li>
                        <strong>Edit View ( <code className="text-red-500">resources/views/posts/edit.blade.php</code>): </strong>
                    </li>
                    </ul>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md">
                        <span>blade</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1" onClick={() =>handleCopy(bladeview)}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="icon-sm"
                            >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                                clipRule="evenodd"
                            />
                            </svg>
                            {copied ? "Copied!" : "Salin kode"}
                        </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto p-4" dir="ltr">
                        <pre className="whitespace-pre">
                        <code className="language-blade">
                        {bladeview}
                        </code>
                        </pre>
                    </div>
                    </div>
                    {/* ke 11 */}
                    <ul>
                    <li>
                        <strong>Show View ( <code>resources/views/posts/show.blade.php</code>): </strong>
                    </li>
                    </ul>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md">
                        <span>blade</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1" onClick={() =>handleCopy(codeblade)}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="icon-sm"
                            >
                            <path
                                fill="currentColor"
                                fillRule="evenodd"
                                d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                                clipRule="evenodd"
                            />
                            </svg>
                            {copied ? "Copied!" : "Salin kode"}
                        </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto p-4" dir="ltr">
                        <pre className="whitespace-pre">
                        <code className="language-blade">
                            {codeblade}
                        </code>
                        </pre>
                    </div>
                    </div>
                    {/* ke 12 */}
                    <div className="relative">
      <h3 className="text-lg font-semibold mb-2">Summary</h3>
      <ol className="list-decimal ml-5 mb-4">
        <li>
          <strong>Migration:</strong> Define the database schema.
        </li>
        <li>
          <strong>Model:</strong> Define the Eloquent model.
        </li>
        <li>
          <strong>Controller:</strong> Handle CRUD operations.
        </li>
        <li>
          <strong>Routes:</strong> Define routes for resource controller.
        </li>
        <li>
          <strong>Views:</strong> Create Blade templates for creating, editing, viewing, and listing records.
        </li>
      </ol>
    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>)
}
export default Laravelpage