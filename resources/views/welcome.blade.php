<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/css/bootstrap.min.css" rel="stylesheet">
        <title>APT Challenge</title>
        <script>
            var csrf_token = '{{ csrf_token() }}';
        </script>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    </head>
    <body>
        @if(count($errors))
            <div class="form-group">
                <div class="alert alert-danger">
                    <ul>
                        @foreach($errors->all() as $error)
                            <li>{{$error}}</li>
                        @endforeach
                    </ul>
                </div>
            </div>
        @endif
        @if(session()->get("success"))
            <div class="form-group">
                <div class="alert alert-success">
                    Submitted successfully!
                </div>
            </div>
        @endif
        <div class="container" id="root">
            
        </div>
        <script type="text/javascript" src="js/app.js"></script>
    </body>
    
</html>
