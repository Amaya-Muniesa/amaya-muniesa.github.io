package com.mycompany.capacitor.cozy.sanctuary;

import com.getcapacitor.Logger;

public class CapacitorCozySanctuary {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
