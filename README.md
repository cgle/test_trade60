DOCS: http://facebook.github.io/react-native/docs/getting-started.html
1. Install node, react, react native, xcode/android toolkits
2. Use this repo as base repo, clone, code and push here
3. Create an application with 4 screens:
    - Login screen/Register screen (email, password, repassword)
    - User profile screen with update view
        - Show user information
        - Update button => update view OR inline editable field (better!)
    - All messages thread view (with search bar)
        - List of threads (title and some description text)
        - On click go to (c)
    - Single thread view
        - Messages list
        - Text/Input box
        - Send button
4. Note:
    - User user.json to get fake user data
    - Use threads.json to find fake threads data
    - Use messages_{thread_id}.json to find fake messages per thread data
    - View (c) doesn't have to persist messages to disk, just need to display new message from user
5. Styling views:
    Try to style those views nicely with inline styling (css like for react native)