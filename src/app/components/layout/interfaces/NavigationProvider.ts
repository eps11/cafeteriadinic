import { SharedNavigationService } from '../../../services/shared-nevigation/shared-navigation.service';
import { NavigationData } from '../models/NavigationData';

/**
 * Component classes participating in layout navigation are required to
 * send context data to the parent layout component.
 *
 * Components need to call this method within ngOnInit.
 */
export interface NavigationProvider {
    navData: NavigationData;
    navService: SharedNavigationService;
}
