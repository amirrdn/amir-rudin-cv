const Laravelpage:React.FC = () => {
    return (<>
        <div className="relative flex w-full min-w-0 flex-col">
            <div className="flex max-w-full flex-col gap-3">
                <div className="flex flex-grow flex-col">
                <div className="flex min-h-[20px] w-full flex-col items-start gap-4 overflow-x-auto">
                    <div className="flex w-full flex-col gap-2">
                    <div className="prose w-full break-words">
                        <p className="mb-4">Creating a CRUD (Create, Read, Update, Delete) application in Laravel 11 involves several steps. Here’s a detailed guide to help you set up a basic CRUD system:</p>
                        <h3 className="mb-2 mt-4 text-xl font-semibold">1. <strong>Set Up Laravel Project</strong>
                        </h3>
                        <p className="mb-4">If you haven`&apos;t already set up a Laravel project, start by creating a new Laravel project:</p>
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
                        <h3 className="mb-2 mt-4 text-xl font-semibold">2. <strong>Create a Migration</strong>
                        </h3>
                        <p className="mb-4">Define your database schema using a migration. For example, if you’re creating a <code className="font-mono text-blue-600">posts</code> table: </p>
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
                    <p className="mb-4">Edit the migration file located in <code className="font-mono text-blue-600">database/migrations/xxxx_xx_xx_create_posts_table.php</code> to define the schema: </p>
                    <div className="bg-gray-900 rounded-md border border-gray-700">
                        <div className="flex items-center justify-start border-b border-gray-700 bg-gray-800 p-2 text-xs font-mono text-gray-400">
                            <span>bash</span>
                        </div>
                        <pre className="p-4 overflow-x-auto text-gray-100 whitespace-pre">
                            <code className="whitespace-pre">
    {`
    // Example migration schema definition
    public function up() {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->timestamps();
        });
    }`}
                            </code>
                        </pre>
                    </div>
                    <p>Run the migration to create the table:</p>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                        <span>bash</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1">
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
                    <h3>3. <strong>Create a Model</strong></h3>
                    <p>Generate a model for your table:</p>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                        <span>bash</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1">
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
                    <p>The model file will be located at <code>app/Models/Post.php</code>. Ensure it looks like this: </p>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                        <span>php</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1">
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
                            Copy Code
                        </button>
                        </div>
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
                    <h3>4. <strong>Create a Controller</strong></h3>
                    <p>Generate a controller to handle CRUD operations:</p>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md border-b border-gray-700">
                        <span>bash</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1">
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
                            Salin kode
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
                    <p>Edit the controller file located at <code>app/Http/Controllers/PostController.php</code>: </p>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md">
                        <span>php</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1">
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
                            Salin kode
                        </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto p-4" dir="ltr">
                        <pre className="whitespace-pre">
                        <code className="language-php">
                            {`namespace App\\Http\\Controllers;

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
                    ]);

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
                    ]);

                    $post->update($request->all());
                    return redirect()->route('posts.index')->with('success', 'Post updated successfully.');
                }

                public function destroy(Post $post) {
                    $post->delete();
                    return redirect()->route('posts.index')->with('success', 'Post deleted successfully.');
                }
                }`}
                        </code>
                        </pre>
                    </div>
                    </div>
                    {/* ke 7 */}
                    <h3>5. <strong>Define Routes</strong></h3>
                    <p>Add routes for your CRUD operations in <code>routes/web.php</code>: </p>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md">
                        <span>php</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1">
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
                            Salin kode
                        </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto p-4" dir="ltr">
                        <pre className="whitespace-pre">
                        <code className="language-php">
                            {`use App\\Http\\Controllers\\PostController;
                Route::resource('posts', PostController::class);`}
                        </code>
                        </pre>
                    </div>
                    </div>
                    {/* ke 8 */}
                    <h3>6. <strong>Create Views</strong></h3>
                    <p>Create Blade templates for your views. Here’s a basic setup:</p>
                    <ul>
                    <li>
                        <strong>Index View ( <code>resources/views/posts/index.blade.php</code>): </strong>
                    </li>
                    </ul>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md">
        <span>blade</span>
        <div className="flex items-center">
          <button className="flex items-center gap-1">
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
            Salin kode
          </button>
        </div>
      </div>
      <div className="overflow-y-auto p-4" dir="ltr">
        <pre className="whitespace-pre">
          <code className="language-blade">
            {`<!DOCTYPE html>
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
            </html>`}
                    </code>
                    </pre>
                    </div>
                    </div>
                    {/* ke 9 */}
                    <ul>
                    <li>
                        <strong>Create View ( <code>resources/views/posts/create.blade.php</code>): </strong>
                    </li>
                    </ul>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md">
                        <span>blade</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1">
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
                            Salin kode
                        </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto p-4" dir="ltr">
                        <pre className="whitespace-pre">
                        <code className="language-blade">{`<!DOCTYPE html>
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
    </html>`}
                        </code>
                        </pre>
                    </div>
                    </div>
                    {/* ke 10 */}
                    <ul>
                    <li>
                        <strong>Edit View ( <code>resources/views/posts/edit.blade.php</code>): </strong>
                    </li>
                    </ul>
                    <div className="dark:bg-gray-950 rounded-md border border-gray-700 border-opacity-50">
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-xs font-sans text-gray-400 rounded-t-md">
                        <span>blade</span>
                        <div className="flex items-center">
                        <button className="flex items-center gap-1">
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
                            Salin kode
                        </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto p-4" dir="ltr">
                        <pre className="whitespace-pre">
                        <code className="language-blade">
            {`<!DOCTYPE html>
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
</html>`}
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
                        <button className="flex items-center gap-1">
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
                            Salin kode
                        </button>
                        </div>
                    </div>
                    <div className="overflow-y-auto p-4" dir="ltr">
                        <pre className="whitespace-pre">
                        <code className="language-blade">
            {`<!DOCTYPE html>
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
</html>`}
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