
    export type RemoteKeys = 'dogs/dog-app';
    type PackageType<T> = T extends 'dogs/dog-app' ? typeof import('dogs/dog-app') :any;