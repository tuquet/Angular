import { Headers, Http, BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { TOKEN } from '../../core/store/actions/appActions';

const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';

export class AuthRequestOptions extends BaseRequestOptions {


    constructor() {
        super();
        this.headers.set('Content-Type', 'application/vnd.api+json');
        // const token = localStorage.getItem(TOKEN);
        // if (token) {
        //     this.headers.append(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${token}`);
        // }
    }

    merge(options?: RequestOptionsArgs): RequestOptions {
        const newOptions = super.merge(options);
        newOptions.headers.set(AUTH_HEADER_KEY,
            `${AUTH_PREFIX} ${localStorage.getItem(TOKEN)}`);
        return newOptions;
    }

}