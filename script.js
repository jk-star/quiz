const QUESTION_BANK = [
  {
    "id": 1,
    "question": "CodeIgniter kya hai?",
    "answer": "CodeIgniter ek PHP framework hai jo MVC architecture follow karta hai. Iska use web applications aur APIs ko structured aur fast way me develop karne ke liye hota hai.",
    "options": [
      "HTTP ke through applications ke beech data/resources exchange karne ka architecture style hai.",
      "CodeIgniter ek PHP framework hai jo MVC architecture follow karta hai. Iska use web applications aur APIs ko structured aur fast way me develop karne ke liye hota hai.",
      "Routes automatically controller methods se resolve ho sakte hain. Production applications me explicit routes generally better hote hain because routing behavior aur allowed HTTP methods clear/control me rehte hain.",
      "CI4 ka database abstraction interface hai jisse SQL manually likhe bina queries build kar sakte hain."
    ],
    "correct": 1
  },
  {
    "id": 2,
    "question": "MVC kya hai?",
    "answer": "Model → Database/data logic handle karta hai.",
    "options": [
      "Model database operations handle karta hai.",
      "Environment-specific configuration ke liye.",
      "Model → Database/data logic handle karta hai.",
      "Reusable procedural functions ka collection."
    ],
    "correct": 2
  },
  {
    "id": 3,
    "question": "CI4 me route kya hota hai?",
    "answer": "Route URL ko kisi Controller method se map karta hai.",
    "options": [
      "Sirf next request tak temporary data store karta hai.",
      "Database me sample/default data insert karne ke liye.",
      "Output escape karne aur XSS risk reduce karne ke liye.",
      "Route URL ko kisi Controller method se map karta hai."
    ],
    "correct": 3
  },
  {
    "id": 4,
    "question": "GET aur POST route me difference?",
    "answer": "GET normally data retrieve/display karne ke liye.",
    "options": [
      "GET normally data retrieve/display karne ke liye.",
      "Controller incoming request ko handle karta hai.",
      "Model → Database/data logic handle karta hai.",
      "Route URL ko kisi Controller method se map karta hai."
    ],
    "correct": 0
  },
  {
    "id": 5,
    "question": "Controller kya hai?",
    "answer": "Controller incoming request ko handle karta hai.",
    "options": [
      "Reusable procedural functions ka collection.",
      "Controller incoming request ko handle karta hai.",
      "GET normally data retrieve/display karne ke liye.",
      "Model → Database/data logic handle karta hai."
    ],
    "correct": 1
  },
  {
    "id": 6,
    "question": "Controller create karne ki command?",
    "answer": "php spark make:controller UserController",
    "options": [
      "See the source notes for this question.",
      "$file = $this->request->getFile('image');",
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');"
    ],
    "correct": 2
  },
  {
    "id": 7,
    "question": "Model kya hai?",
    "answer": "Model database operations handle karta hai.",
    "options": [
      "Environment-specific configuration ke liye.",
      "Reusable procedural functions ka collection.",
      "Model → Database/data logic handle karta hai.",
      "Model database operations handle karta hai."
    ],
    "correct": 3
  },
  {
    "id": 8,
    "question": "$allowedFields kya hai?",
    "answer": "Ye define karta hai ki Model ke through kaunse fields insert/update kiye ja sakte hain.",
    "options": [
      "Ye define karta hai ki Model ke through kaunse fields insert/update kiye ja sakte hain.",
      "Database schema ko PHP files/code ke through version-control karne ka method hai.",
      "HTTP ke through applications ke beech data/resources exchange karne ka architecture style hai.",
      "Session server side par user-specific data temporarily maintain karta hai."
    ],
    "correct": 0
  },
  {
    "id": 9,
    "question": "Database se saare records kaise nikalenge?",
    "answer": "See the source notes for this question.",
    "options": [
      "$file = $this->request->getFile('image');",
      "See the source notes for this question.",
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');"
    ],
    "correct": 1
  },
  {
    "id": 10,
    "question": "Single record kaise retrieve karenge?",
    "answer": "$user = $model->find($id);",
    "options": [
      "CI4 ka command-line tool.",
      "Route ko name de sakte hain:",
      "$user = $model->find($id);",
      "Cross-Site Request Forgery"
    ],
    "correct": 2
  },
  {
    "id": 11,
    "question": "Record insert kaise karenge?",
    "answer": "See the source notes for this question.",
    "options": [
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');",
      "$file = $this->request->getFile('image');",
      "See the source notes for this question."
    ],
    "correct": 3
  },
  {
    "id": 12,
    "question": "Record update kaise karenge?",
    "answer": "See the source notes for this question.",
    "options": [
      "See the source notes for this question.",
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');",
      "$file = $this->request->getFile('image');"
    ],
    "correct": 0
  },
  {
    "id": 13,
    "question": "Record delete?",
    "answer": "$model->delete($id);",
    "options": [
      "*Typical methods:**",
      "$model->delete($id);",
      "Plain password nahi.",
      "Cross-Site Scripting"
    ],
    "correct": 1
  },
  {
    "id": 14,
    "question": "CRUD ka full form?",
    "answer": "*Typical methods:**",
    "options": [
      "create,read,update,delete",
      "Cross-Site Scripting",
      "*Typical methods:**",
      "$model->delete($id);"
    ],
    "correct": 2
  },
  {
    "id": 15,
    "question": "Form data kaise receive karenge?",
    "answer": "$name = $this->request->getPost('name');",
    "options": [
      "php spark make:controller UserController",
      "See the source notes for this question.",
      "$file = $this->request->getFile('image');",
      "$name = $this->request->getPost('name');"
    ],
    "correct": 3
  },
  {
    "id": 16,
    "question": "Validation kaise lagate hain?",
    "answer": "See the source notes for this question.",
    "options": [
      "See the source notes for this question.",
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');",
      "$file = $this->request->getFile('image');"
    ],
    "correct": 0
  },
  {
    "id": 17,
    "question": "Common validation rules?",
    "answer": "*Example:**",
    "options": [
      "app/Models",
      "*Example:**",
      "*Multiple:**",
      "*Layout:**"
    ],
    "correct": 1
  },
  {
    "id": 18,
    "question": "Query Builder kya hai?",
    "answer": "CI4 ka database abstraction interface hai jisse SQL manually likhe bina queries build kar sakte hain.",
    "options": [
      "Ye define karta hai ki Model ke through kaunse fields insert/update kiye ja sakte hain.",
      "Database schema ko PHP files/code ke through version-control karne ka method hai.",
      "CI4 ka database abstraction interface hai jisse SQL manually likhe bina queries build kar sakte hain.",
      "HTTP ke through applications ke beech data/resources exchange karne ka architecture style hai."
    ],
    "correct": 2
  },
  {
    "id": 19,
    "question": "WHERE query?",
    "answer": "*Multiple:**",
    "options": [
      "csrf_field()",
      "*Example:**",
      "*Controller:**",
      "*Multiple:**"
    ],
    "correct": 3
  },
  {
    "id": 20,
    "question": "where() + first() ?",
    "answer": "Commonly login me use hota hai.",
    "options": [
      "Commonly login me use hota hai.",
      "return redirect()->to('/users');",
      ".env / app/Config/Database.php",
      "$newName = $file->getRandomName();"
    ],
    "correct": 0
  },
  {
    "id": 21,
    "question": "LIKE search?",
    "answer": "See the source notes for this question.",
    "options": [
      "$file = $this->request->getFile('image');",
      "See the source notes for this question.",
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');"
    ],
    "correct": 1
  },
  {
    "id": 22,
    "question": "Order By?",
    "answer": "See the source notes for this question.",
    "options": [
      "$name = $this->request->getPost('name');",
      "$file = $this->request->getFile('image');",
      "See the source notes for this question.",
      "php spark make:controller UserController"
    ],
    "correct": 2
  },
  {
    "id": 23,
    "question": "Limit?",
    "answer": "See the source notes for this question.",
    "options": [
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');",
      "$file = $this->request->getFile('image');",
      "See the source notes for this question."
    ],
    "correct": 3
  },
  {
    "id": 24,
    "question": "JOIN kaise karenge?",
    "answer": "See the source notes for this question.",
    "options": [
      "See the source notes for this question.",
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');",
      "$file = $this->request->getFile('image');"
    ],
    "correct": 0
  },
  {
    "id": 25,
    "question": "Session kya hai?",
    "answer": "Session server side par user-specific data temporarily maintain karta hai.",
    "options": [
      "base_url() generally assets/resources ke base URL banane me useful:",
      "Session server side par user-specific data temporarily maintain karta hai.",
      "Controller execute hone ke before/after request ko process kar sakta hai.",
      "Database schema ko PHP files/code ke through version-control karne ka method hai."
    ],
    "correct": 1
  },
  {
    "id": 26,
    "question": "Session destroy?",
    "answer": "session()->destroy();",
    "options": [
      "app/Config/Routes.php",
      "$model->delete($id);",
      "session()->destroy();",
      "Model View Controller"
    ],
    "correct": 2
  },
  {
    "id": 27,
    "question": "Flashdata kya hai?",
    "answer": "Sirf next request tak temporary data store karta hai.",
    "options": [
      "Route URL ko kisi Controller method se map karta hai.",
      "Database me sample/default data insert karne ke liye.",
      "Output escape karne aur XSS risk reduce karne ke liye.",
      "Sirf next request tak temporary data store karta hai."
    ],
    "correct": 3
  },
  {
    "id": 28,
    "question": "Login ka basic flow?",
    "answer": "See the source notes for this question.",
    "options": [
      "See the source notes for this question.",
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');",
      "$file = $this->request->getFile('image');"
    ],
    "correct": 0
  },
  {
    "id": 29,
    "question": "Password database me kaise store karna chahiye?",
    "answer": "Plain password nahi.",
    "options": [
      "*Typical methods:**",
      "Plain password nahi.",
      "$model->delete($id);",
      "Cross-Site Scripting"
    ],
    "correct": 1
  },
  {
    "id": 30,
    "question": "Password verify?",
    "answer": "See the source notes for this question.",
    "options": [
      "$name = $this->request->getPost('name');",
      "$file = $this->request->getFile('image');",
      "See the source notes for this question.",
      "php spark make:controller UserController"
    ],
    "correct": 2
  },
  {
    "id": 31,
    "question": "Login session?",
    "answer": "See the source notes for this question.",
    "options": [
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');",
      "$file = $this->request->getFile('image');",
      "See the source notes for this question."
    ],
    "correct": 3
  },
  {
    "id": 32,
    "question": "Logout?",
    "answer": "See the source notes for this question.",
    "options": [
      "See the source notes for this question.",
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');",
      "$file = $this->request->getFile('image');"
    ],
    "correct": 0
  },
  {
    "id": 33,
    "question": "Filter kya hai?",
    "answer": "Controller execute hone ke before/after request ko process kar sakta hai.",
    "options": [
      "Database schema ko PHP files/code ke through version-control karne ka method hai.",
      "Controller execute hone ke before/after request ko process kar sakta hai.",
      "Session server side par user-specific data temporarily maintain karta hai.",
      "base_url() generally assets/resources ke base URL banane me useful:"
    ],
    "correct": 1
  },
  {
    "id": 34,
    "question": "Authentication filter ka example?",
    "answer": "See the source notes for this question.",
    "options": [
      "$name = $this->request->getPost('name');",
      "$file = $this->request->getFile('image');",
      "See the source notes for this question.",
      "php spark make:controller UserController"
    ],
    "correct": 2
  },
  {
    "id": 35,
    "question": "Filter alias kaha define hota hai?",
    "answer": "app/Config/Filters.php",
    "options": [
      "session()->destroy();",
      "Model View Controller",
      "app/Config/Routes.php",
      "app/Config/Filters.php"
    ],
    "correct": 3
  },
  {
    "id": 36,
    "question": "Controller se View me data kaise pass karenge?",
    "answer": "*Controller:**",
    "options": [
      "*Controller:**",
      "app/Controllers",
      "password_hash()",
      "*Multiple:**"
    ],
    "correct": 0
  },
  {
    "id": 37,
    "question": "esc() kyun use karte hain?",
    "answer": "Output escape karne aur XSS risk reduce karne ke liye.",
    "options": [
      "Sirf next request tak temporary data store karta hai.",
      "Output escape karne aur XSS risk reduce karne ke liye.",
      "Query Builder, Model aur parameter binding use karein.",
      "Route URL ko kisi Controller method se map karta hai."
    ],
    "correct": 1
  },
  {
    "id": 38,
    "question": "Layout kaise create hota hai?",
    "answer": "*Layout:**",
    "options": [
      "*Example:**",
      "app/Views",
      "*Layout:**",
      "app/Models"
    ],
    "correct": 2
  },
  {
    "id": 39,
    "question": "Pagination kaise?",
    "answer": "*View:**",
    "options": [
      "insert()",
      "update()",
      "delete()",
      "*View:**"
    ],
    "correct": 3
  },
  {
    "id": 40,
    "question": "Uploaded file kaise retrieve karenge?",
    "answer": "$file = $this->request->getFile('image');",
    "options": [
      "$file = $this->request->getFile('image');",
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');",
      "Model database operations handle karta hai."
    ],
    "correct": 0
  },
  {
    "id": 41,
    "question": "File valid hai ya nahi?",
    "answer": "See the source notes for this question.",
    "options": [
      "$file = $this->request->getFile('image');",
      "See the source notes for this question.",
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');"
    ],
    "correct": 1
  },
  {
    "id": 42,
    "question": "Random filename kaise?",
    "answer": "$newName = $file->getRandomName();",
    "options": [
      "Commonly login me use hota hai.",
      ".env / app/Config/Database.php",
      "$newName = $file->getRandomName();",
      "return redirect()->to('/users');"
    ],
    "correct": 2
  },
  {
    "id": 43,
    "question": "Migration kya hai?",
    "answer": "Database schema ko PHP files/code ke through version-control karne ka method hai.",
    "options": [
      "Ye define karta hai ki Model ke through kaunse fields insert/update kiye ja sakte hain.",
      "Session server side par user-specific data temporarily maintain karta hai.",
      "Controller execute hone ke before/after request ko process kar sakta hai.",
      "Database schema ko PHP files/code ke through version-control karne ka method hai."
    ],
    "correct": 3
  },
  {
    "id": 44,
    "question": "Seeder kya hai?",
    "answer": "Database me sample/default data insert karne ke liye.",
    "options": [
      "Database me sample/default data insert karne ke liye.",
      "Route URL ko kisi Controller method se map karta hai.",
      "Sirf next request tak temporary data store karta hai.",
      "Output escape karne aur XSS risk reduce karne ke liye."
    ],
    "correct": 0
  },
  {
    "id": 45,
    "question": "REST API kya hai?",
    "answer": "HTTP ke through applications ke beech data/resources exchange karne ka architecture style hai.",
    "options": [
      "Database schema ko PHP files/code ke through version-control karne ka method hai.",
      "HTTP ke through applications ke beech data/resources exchange karne ka architecture style hai.",
      "Ye define karta hai ki Model ke through kaunse fields insert/update kiye ja sakte hain.",
      "CI4 ka database abstraction interface hai jisse SQL manually likhe bina queries build kar sakte hain."
    ],
    "correct": 1
  },
  {
    "id": 46,
    "question": "ResourceController kya hai?",
    "answer": "CI4 me RESTful APIs banane ke liye useful base controller.",
    "options": [
      "Query Builder, Model aur parameter binding use karein.",
      "Application ke controllers ke liye common base controller hai.",
      "CI4 me RESTful APIs banane ke liye useful base controller.",
      "Output escape karne aur XSS risk reduce karne ke liye."
    ],
    "correct": 2
  },
  {
    "id": 47,
    "question": "JSON response kaise return karenge?",
    "answer": "See the source notes for this question.",
    "options": [
      "php spark make:controller UserController",
      "$name = $this->request->getPost('name');",
      "$file = $this->request->getFile('image');",
      "See the source notes for this question."
    ],
    "correct": 3
  },
  {
    "id": 48,
    "question": "CSRF kya hai?",
    "answer": "Cross-Site Request Forgery",
    "options": [
      "Cross-Site Request Forgery",
      "$user = $model->find($id);",
      "CI4 ka command-line tool.",
      "Route ko name de sakte hain:"
    ],
    "correct": 0
  },
  {
    "id": 49,
    "question": "XSS kya hai?",
    "answer": "Cross-Site Scripting",
    "options": [
      "*Typical methods:**",
      "Cross-Site Scripting",
      "$model->delete($id);",
      "Plain password nahi."
    ],
    "correct": 1
  },
  {
    "id": 50,
    "question": "SQL Injection se kaise protect karenge?",
    "answer": "Query Builder, Model aur parameter binding use karein.",
    "options": [
      "Route URL ko kisi Controller method se map karta hai.",
      "Sirf next request tak temporary data store karta hai.",
      "Query Builder, Model aur parameter binding use karein.",
      "Output escape karne aur XSS risk reduce karne ke liye."
    ],
    "correct": 2
  },
  {
    "id": 51,
    "question": ".env file kya hai?",
    "answer": "Environment-specific configuration ke liye.",
    "options": [
      "Model database operations handle karta hai.",
      "Reusable procedural functions ka collection.",
      "Model → Database/data logic handle karta hai.",
      "Environment-specific configuration ke liye."
    ],
    "correct": 3
  },
  {
    "id": 52,
    "question": "Spark kya hai?",
    "answer": "CI4 ka command-line tool.",
    "options": [
      "CI4 ka command-line tool.",
      "$user = $model->find($id);",
      "Cross-Site Request Forgery",
      "app/Config/Filters.php"
    ],
    "correct": 0
  },
  {
    "id": 53,
    "question": "BaseController kya hai?",
    "answer": "Application ke controllers ke liye common base controller hai.",
    "options": [
      "Output escape karne aur XSS risk reduce karne ke liye.",
      "Application ke controllers ke liye common base controller hai.",
      "CI4 me RESTful APIs banane ke liye useful base controller.",
      "base_url() generally assets/resources ke base URL banane me useful:"
    ],
    "correct": 1
  },
  {
    "id": 54,
    "question": "Helper kya hai?",
    "answer": "Reusable procedural functions ka collection.",
    "options": [
      "Model database operations handle karta hai.",
      "Environment-specific configuration ke liye.",
      "Reusable procedural functions ka collection.",
      "Model → Database/data logic handle karta hai."
    ],
    "correct": 2
  },
  {
    "id": 55,
    "question": "base_url() vs site_url()?",
    "answer": "base_url() generally assets/resources ke base URL banane me useful:",
    "options": [
      "Application ke controllers ke liye common base controller hai.",
      "Controller execute hone ke before/after request ko process kar sakta hai.",
      "Session server side par user-specific data temporarily maintain karta hai.",
      "base_url() generally assets/resources ke base URL banane me useful:"
    ],
    "correct": 3
  },
  {
    "id": 56,
    "question": "Redirect kaise?",
    "answer": "return redirect()->to('/users');",
    "options": [
      "return redirect()->to('/users');",
      "Commonly login me use hota hai.",
      "$newName = $file->getRandomName();",
      ".env / app/Config/Database.php"
    ],
    "correct": 0
  },
  {
    "id": 57,
    "question": "Named routes kya hain?",
    "answer": "Route ko name de sakte hain:",
    "options": [
      ".env / app/Config/Database.php",
      "Route ko name de sakte hain:",
      "$user = $model->find($id);",
      "Cross-Site Request Forgery"
    ],
    "correct": 1
  },
  {
    "id": 58,
    "question": "Route parameters?",
    "answer": "*Controller:**",
    "options": [
      "password_hash()",
      "*Multiple:**",
      "*Controller:**",
      "app/Controllers"
    ],
    "correct": 2
  },
  {
    "id": 59,
    "question": "Route group?",
    "answer": "URL /admin/users",
    "options": [
      "find() / first()",
      "app/Controllers",
      "$this->validate()",
      "URL /admin/users"
    ],
    "correct": 3
  },
  {
    "id": 60,
    "question": "Auto Routing kya hai?",
    "answer": "Routes automatically controller methods se resolve ho sakte hain. Production applications me explicit routes generally better hote hain because routing behavior aur allowed HTTP methods clear/control me rehte hain.",
    "options": [
      "Routes automatically controller methods se resolve ho sakte hain. Production applications me explicit routes generally better hote hain because routing behavior aur allowed HTTP methods clear/control me rehte hain.",
      "CodeIgniter ek PHP framework hai jo MVC architecture follow karta hai. Iska use web applications aur APIs ko structured aur fast way me develop karne ke liye hota hai.",
      "CI4 ka database abstraction interface hai jisse SQL manually likhe bina queries build kar sakte hain.",
      "HTTP ke through applications ke beech data/resources exchange karne ka architecture style hai."
    ],
    "correct": 0
  },
  {
    "id": 62,
    "question": "CI4 kis language me hai?",
    "answer": "PHP",
    "options": [
      "esc()",
      "*View:**",
      "PHP",
      "Spark"
    ],
    "correct": 2
  },
  {
    "id": 63,
    "question": "MVC?",
    "answer": "Model View Controller",
    "options": [
      "session()->destroy();",
      "app/Config/Routes.php",
      "$model->delete($id);",
      "Model View Controller"
    ],
    "correct": 3
  },
  {
    "id": 64,
    "question": "CLI tool?",
    "answer": "Spark",
    "options": [
      "Spark",
      "esc()",
      "PHP",
      "*View:**"
    ],
    "correct": 0
  },
  {
    "id": 65,
    "question": "Routes file?",
    "answer": "app/Config/Routes.php",
    "options": [
      "$model->delete($id);",
      "app/Config/Routes.php",
      "session()->destroy();",
      "Model View Controller"
    ],
    "correct": 1
  },
  {
    "id": 66,
    "question": "Models folder?",
    "answer": "app/Models",
    "options": [
      "*Example:**",
      "app/Views",
      "app/Models",
      "*Layout:**"
    ],
    "correct": 2
  },
  {
    "id": 67,
    "question": "Views folder?",
    "answer": "app/Views",
    "options": [
      "session()",
      "findAll()",
      "*Layout:**",
      "app/Views"
    ],
    "correct": 3
  },
  {
    "id": 68,
    "question": "Controllers folder?",
    "answer": "app/Controllers",
    "options": [
      "app/Controllers",
      "password_hash()",
      "*Controller:**",
      "URL /admin/users"
    ],
    "correct": 0
  },
  {
    "id": 69,
    "question": "Database config?",
    "answer": ".env / app/Config/Database.php",
    "options": [
      "Route ko name de sakte hain:",
      ".env / app/Config/Database.php",
      "Commonly login me use hota hai.",
      "return redirect()->to('/users');"
    ],
    "correct": 1
  },
  {
    "id": 70,
    "question": "Validation?",
    "answer": "$this->validate()",
    "options": [
      "URL /admin/users",
      "find() / first()",
      "$this->validate()",
      "password_verify()"
    ],
    "correct": 2
  },
  {
    "id": 71,
    "question": "Session access?",
    "answer": "session()",
    "options": [
      "app/Views",
      "findAll()",
      "*Layout:**",
      "session()"
    ],
    "correct": 3
  },
  {
    "id": 72,
    "question": "Password encryption/hash?",
    "answer": "password_hash()",
    "options": [
      "password_hash()",
      "app/Controllers",
      "*Controller:**",
      "URL /admin/users"
    ],
    "correct": 0
  },
  {
    "id": 73,
    "question": "Password checking?",
    "answer": "password_verify()",
    "options": [
      "find() / first()",
      "password_verify()",
      "$this->validate()",
      "URL /admin/users"
    ],
    "correct": 1
  },
  {
    "id": 74,
    "question": "Output escaping?",
    "answer": "esc()",
    "options": [
      "PHP",
      "*View:**",
      "esc()",
      "Spark"
    ],
    "correct": 2
  },
  {
    "id": 75,
    "question": "CSRF form field?",
    "answer": "csrf_field()",
    "options": [
      "*Multiple:**",
      "*Example:**",
      "*Controller:**",
      "csrf_field()"
    ],
    "correct": 3
  },
  {
    "id": 76,
    "question": "All records?",
    "answer": "findAll()",
    "options": [
      "findAll()",
      "app/Views",
      "session()",
      "*Layout:**"
    ],
    "correct": 0
  },
  {
    "id": 77,
    "question": "One record?",
    "answer": "find() / first()",
    "options": [
      "$this->validate()",
      "find() / first()",
      "URL /admin/users",
      "app/Controllers"
    ],
    "correct": 1
  },
  {
    "id": 78,
    "question": "Insert?",
    "answer": "insert()",
    "options": [
      "update()",
      "delete()",
      "insert()",
      "*View:**"
    ],
    "correct": 2
  },
  {
    "id": 79,
    "question": "Update?",
    "answer": "update()",
    "options": [
      "*View:**",
      "insert()",
      "delete()",
      "update()"
    ],
    "correct": 3
  },
  {
    "id": 80,
    "question": "Delete?",
    "answer": "delete()",
    "options": [
      "delete()",
      "*View:**",
      "insert()",
      "update()"
    ],
    "correct": 0
  }
];

let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const reviewScreen = document.getElementById("reviewScreen");

const questionCount = document.getElementById("questionCount");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const reviewBtn = document.getElementById("reviewBtn");
const backResultBtn = document.getElementById("backResultBtn");

const questionText = document.getElementById("questionText");
const questionNumber = document.getElementById("questionNumber");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const optionsBox = document.getElementById("options");
const feedback = document.getElementById("feedback");
const liveScore = document.getElementById("liveScore");

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  const countValue = questionCount.value;
  const count = countValue === "all" ? QUESTION_BANK.length : Number(countValue);

  quizQuestions = shuffle(QUESTION_BANK).slice(0, count);
  currentIndex = 0;
  score = 0;
  userAnswers = [];

  liveScore.textContent = "0";
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  reviewScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  const q = quizQuestions[currentIndex];

  questionNumber.textContent = `Question ${currentIndex + 1}`;
  progressText.textContent = `Question ${currentIndex + 1} of ${quizQuestions.length}`;
  questionText.textContent = q.question;
  progressBar.style.width = `${((currentIndex + 1) / quizQuestions.length) * 100}%`;

  optionsBox.innerHTML = "";
  feedback.className = "feedback hidden";
  feedback.textContent = "";
  nextBtn.disabled = true;

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => selectAnswer(index, button));
    optionsBox.appendChild(button);
  });

  nextBtn.textContent =
    currentIndex === quizQuestions.length - 1 ? "Finish Quiz" : "Next";
}

function selectAnswer(selectedIndex, selectedButton) {
  const q = quizQuestions[currentIndex];
  const buttons = [...document.querySelectorAll(".option")];

  buttons.forEach(button => button.disabled = true);

  const isCorrect = selectedIndex === q.correct;

  if (isCorrect) {
    score++;
    liveScore.textContent = score;
    selectedButton.classList.add("correct");
    feedback.className = "feedback correct";
    feedback.textContent = "Correct! Good job.";
  } else {
    selectedButton.classList.add("wrong");
    buttons[q.correct].classList.add("correct");
    feedback.className = "feedback wrong";
    feedback.textContent = `Wrong. Correct answer: ${q.answer}`;
  }

  userAnswers[currentIndex] = {
    question: q.question,
    selected: q.options[selectedIndex],
    correct: q.answer,
    isCorrect
  };

  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const total = quizQuestions.length;
  const wrong = total - score;
  const percent = Math.round((score / total) * 100);

  document.getElementById("finalScore").textContent = score;
  document.getElementById("finalTotal").textContent = total;
  document.getElementById("correctCount").textContent = score;
  document.getElementById("wrongCount").textContent = wrong;
  document.getElementById("percentage").textContent = `${percent}%`;

  let message = "Keep practicing!";
  if (percent >= 80) message = "Excellent! Your CodeIgniter preparation is strong.";
  else if (percent >= 60) message = "Good job! Review the wrong answers once more.";
  else if (percent >= 40) message = "Keep practicing the concepts and try again.";

  document.getElementById("resultMessage").textContent = message;
}

reviewBtn.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  reviewScreen.classList.remove("hidden");

  const list = document.getElementById("reviewList");
  list.innerHTML = "";

  userAnswers.forEach((item, index) => {
    const div = document.createElement("article");
    div.className = "review-item";
    div.innerHTML = `
      <h3>${index + 1}. ${escapeHtml(item.question)}</h3>
      <div class="your-answer">
        <strong>Your answer:</strong> ${escapeHtml(item.selected || "Not answered")}
      </div>
      <div class="correct-answer">
        <strong>Correct answer:</strong> ${escapeHtml(item.correct)}
      </div>
    `;
    list.appendChild(div);
  });
});

backResultBtn.addEventListener("click", () => {
  reviewScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
});

restartBtn.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});

startBtn.addEventListener("click", startQuiz);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
