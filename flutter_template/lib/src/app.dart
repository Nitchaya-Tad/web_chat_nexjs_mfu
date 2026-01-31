import 'package:flutter/material.dart';
import 'package:flutter_template/src/config/theme.dart';
import 'package:flutter_template/src/features/counter/presentation/screens/home_page.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Template',
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: ThemeMode.system,
      home: const HomePage(title: 'Flutter Template'),
    );
  }
}
