import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HealthSecurityWebSharedModule } from 'app/shared';
import { HealthSecurityWebAdminModule } from 'app/admin/admin.module';
import {
    ReporteComponent,
    ReporteDetailComponent,
    ReporteUpdateComponent,
    ReporteDeletePopupComponent,
    ReporteDeleteDialogComponent,
    reporteRoute,
    reportePopupRoute
} from './';

const ENTITY_STATES = [...reporteRoute, ...reportePopupRoute];

@NgModule({
    imports: [HealthSecurityWebSharedModule, HealthSecurityWebAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ReporteComponent,
        ReporteDetailComponent,
        ReporteUpdateComponent,
        ReporteDeleteDialogComponent,
        ReporteDeletePopupComponent
    ],
    entryComponents: [ReporteComponent, ReporteUpdateComponent, ReporteDeleteDialogComponent, ReporteDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HealthSecurityWebReporteModule {}
