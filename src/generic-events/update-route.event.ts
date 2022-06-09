import {defineTypedEvent} from 'element-vir';
import {FullBrandingRoute} from '../routing/cosmonic-branding-router';

export const updateRouteEvent = defineTypedEvent<FullBrandingRoute>()('update-routeEvent');
