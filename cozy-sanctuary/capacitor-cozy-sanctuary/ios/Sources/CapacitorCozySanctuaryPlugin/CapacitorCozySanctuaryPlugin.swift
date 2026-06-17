import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorCozySanctuaryPlugin)
public class CapacitorCozySanctuaryPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CapacitorCozySanctuaryPlugin"
    public let jsName = "CapacitorCozySanctuary"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = CapacitorCozySanctuary()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
