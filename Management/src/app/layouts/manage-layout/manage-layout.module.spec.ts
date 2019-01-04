import { ManageLayoutModule } from './manage-layout.module';

describe('ManageLayoutModule', () => {
  let manageLayoutModule: ManageLayoutModule;

  beforeEach(() => {
    manageLayoutModule = new ManageLayoutModule();
  });

  it('should create an instance', () => {
    expect(manageLayoutModule).toBeTruthy();
  });
});
