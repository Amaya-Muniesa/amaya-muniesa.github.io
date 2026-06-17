// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorCozySanctuary",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "CapacitorCozySanctuary",
            targets: ["CapacitorCozySanctuaryPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
    ],
    targets: [
        .target(
            name: "CapacitorCozySanctuaryPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorCozySanctuaryPlugin"),
        .testTarget(
            name: "CapacitorCozySanctuaryPluginTests",
            dependencies: ["CapacitorCozySanctuaryPlugin"],
            path: "ios/Tests/CapacitorCozySanctuaryPluginTests")
    ]
)