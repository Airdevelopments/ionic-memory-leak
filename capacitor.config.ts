import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'minimal-memory-leak',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
