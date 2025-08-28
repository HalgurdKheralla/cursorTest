# MinMap Mobile App (Expo + TypeScript)

## Prerequisites
- Node.js 18+
- Android Studio (Android emulator) or a physical device with Expo Go
- Optional (Web): install `react-dom`, `react-native-web`, `@expo/metro-runtime`

## Getting Started
```bash
# Install dependencies (already installed by scaffold)
npm install

# Run on Android emulator or connected device
npm run android

# Run on iOS (requires macOS) or use Expo Go on iOS
npm run ios

# Run on Web (optional)
# If prompted, install web deps:
# npx expo install react-dom react-native-web @expo/metro-runtime
npm run web
```

## Environment Variables
Create a `.env` file based on `.env.example` in the project root:
```env
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
```
Used by `src/lib/supabase.ts`.

## Project Structure
```
src/
  navigation/RootNavigator.tsx
  screens/
    HomeScreen.tsx
    ShopScreen.tsx
    LearnScreen.tsx
    CommunityScreen.tsx
    ProfileScreen.tsx
  store/
    index.ts
    slices/
      authSlice.ts
      preferencesSlice.ts
  lib/
    supabase.ts
  types/
    env.d.ts
```

## Scripts
```bash
npm run android
npm run ios
npm run web
npm run typecheck
```

## Next Steps
- Implement Supabase Auth flows (register/login/logout)
- Build onboarding and profile management
- Scaffold Shop/Learn/Community modules per PRD
- Add analytics and push notifications