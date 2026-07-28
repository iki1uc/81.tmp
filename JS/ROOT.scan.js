// ROOT.scan.js

import { ROOT_RESPO } from "./ROOT.respo.js";
import { SCAN_81 } from "./tmp/81.scan.js";

export function ROOT_81(files) {

    const respo = ROOT_RESPO(files);

    if (respo !== "OK" && respo !== "FLOW") {
        return {
            ROOT: respo,
            SCAN: null
        };
    }

    return {
        ROOT: respo,
        SCAN: SCAN_81()
    };
}
