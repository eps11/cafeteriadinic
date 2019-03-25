import { TestBed } from '@angular/core/testing';

import { SharedNavigationService } from './shared-navigation.service';

describe('SharedNavigationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: SharedNavigationService = TestBed.get(
            SharedNavigationService
        );
        expect(service).toBeTruthy();
    });
});
