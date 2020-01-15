import { IFile } from "@fang/core/lib/interface";
import { IOptions } from "./interface";

export default (options: IOptions) => (files: Array<IFile>): Array<IFile> => {
	// This is where the magic happens!

	return files;
};
