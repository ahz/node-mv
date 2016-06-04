// https://github.com/Microsoft/TypeScript/issues/5073
declare namespace mv {
    export interface IOptions {
        mkdirp?: boolean;
        clobber?: boolean;
        limit?: number;
    }
}

declare function mv(source: string, dest: string, cb: (err: any) => void): void;
declare function mv(source: string, dest: string, options: mv.IOptions, cb: (err: any) => void): void;

export = mv;