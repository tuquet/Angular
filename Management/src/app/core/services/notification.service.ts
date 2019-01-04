import { Injectable } from '@angular/core';
declare const $: any;
@Injectable()

export class NotificationService {
    showNotification(message, type = 1) {
        let color: string = '';
        switch (type) {
            case 1:
                color = "success";
                break;
            case 2:
                color = "danger";
                break;
            case 3:
                color = "warning";
                break;
        }
        $.notify({
            message: message
        }, {
                delay: 3000,
                timer: 1000,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                placement: {
                    from: 'bottom',
                    align: 'left'
                },
                template: '<div data-notify="container" class="alert alert-' + color + ' alert-dismissible fade show d-inline-block fixed left bottom" role="alert" style="width: 300px; height: 50px;">' +
                    '<div style="line-height: 20px">' +
                    '<span class="icon-circle-20 bg-' + color + '" ><span class="oi oi-info"></span></span> {2} ' +
                    '</div>' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close" style="line-height: 16px">' +
                    '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '</div>'
            });
    }
}