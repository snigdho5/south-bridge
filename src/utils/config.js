
import { createNavigationContainerRef, DrawerActions, StackActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export function goBack(count = 1) {
    navigationRef.current?.dispatch(StackActions.pop(count));
}

export function toggleDrawer() {
    navigationRef.dispatch(DrawerActions.openDrawer());
}
