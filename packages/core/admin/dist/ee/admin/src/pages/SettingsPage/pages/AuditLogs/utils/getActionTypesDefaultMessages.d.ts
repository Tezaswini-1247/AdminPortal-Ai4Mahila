export declare const actionTypes: {
    'entry.create': string;
    'entry.update': string;
    'entry.delete': string;
    'entry.publish': string;
    'entry.unpublish': string;
    'media.create': string;
    'media.update': string;
    'media.delete': string;
    'media-folder.create': string;
    'media-folder.update': string;
    'media-folder.delete': string;
    'user.create': string;
    'user.update': string;
    'user.delete': string;
    'admin.auth.success': string;
    'admin.logout': string;
    'content-type.create': string;
    'content-type.update': string;
    'content-type.delete': string;
    'component.create': string;
    'component.update': string;
    'component.delete': string;
    'role.create': string;
    'role.update': string;
    'role.delete': string;
    'permission.create': string;
    'permission.update': string;
    'permission.delete': string;
};
export declare const getDefaultMessage: (value: keyof typeof actionTypes) => string;