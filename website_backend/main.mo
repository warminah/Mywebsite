// src/website_backend/main.mo
import Debug "mo:base/Debug";

actor Website {
    public func getGreeting() : async Text {
        return "Selamat datang di situs web kami!";
    }
};
