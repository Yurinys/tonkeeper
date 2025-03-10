import { RouteProp } from '@react-navigation/native';
import { AppStackRouteNames } from '$navigation';
import { AppStackParamList } from '$navigation/AppStack';

export interface ScanQRProps {
  route: RouteProp<AppStackParamList, AppStackRouteNames.ScanQR>;
}
Document API - updating docsAdd UI - improving security