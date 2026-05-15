
    export type RemoteKeys = 'cats/cat-app';
    type PackageType<T> = T extends 'cats/cat-app' ? typeof import('cats/cat-app') :any;