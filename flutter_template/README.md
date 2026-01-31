# Flutter Template

A premium Flutter project template with a scalable folder structure, cleaner architecture, and modern theming.

## Features

- **Clean Architecture-inspired Structure**: Separation of concerns using feature-based folders.
- **Modern UI**: Polished design using Material 3 `ColorScheme` and custom widgets.
- **Theme Configuration**: Centralized light and dark theme setup in `src/config/theme.dart`.
- **Refactored Counter Example**: A better version of the default counter app showing how to organize widgets.

## Folder Structure

```
lib/
├── src/
│   ├── config/             # Configuration files (Theme, Routes, etc.)
│   │   └── theme.dart
│   ├── features/           # Feature-based modules
│   │   └── counter/        # Example Feature
│   │       ├── data/       # Data layer (Repositories, API sources)
│   │       ├── domain/     # Business logic layer (Models, Uses cases)
│   │       └── presentation/ # UI layer (Screens, Widgets, Controllers)
│   │           └── screens/
│   │               └── home_page.dart
│   └── app.dart            # Main App Widget configuration
└── main.dart               # Entry point
```

## Getting Started

1.  Run `flutter pub get` to install dependencies.
2.  Run `flutter run` to start the app.
