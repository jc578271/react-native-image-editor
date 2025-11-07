import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SquareImageCropper } from './SquareImageCropper';

const flex1 = { flex: 1 };

export default function App() {
  return (
    <SafeAreaView style={flex1}>
      <SquareImageCropper />
    </SafeAreaView>
  );
}
