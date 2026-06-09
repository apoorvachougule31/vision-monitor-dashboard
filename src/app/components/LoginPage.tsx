import { Eye } from "lucide-react";
import { useState } from "react";

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin();
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-[12px] flex items-center justify-center">
              <Eye className="w-9 h-9 text-white" />
            </div>
          </div>
          <h1 className="text-[28px] mb-2" style={{ fontWeight: 600 }}>SMART EYE</h1>
          <p className="text-[15px] mb-1">
            <span className="text-muted-foreground">by</span>{" "}
            <span className="text-foreground" style={{ fontWeight: 600 }}>ARTIVUS SYSTEMS</span>
          </p>
          <p className="text-[13px] text-muted-foreground">Vision monitoring system</p>
        </div>

        <div className="bg-white rounded-[12px] p-8 shadow-sm" style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}>
          <h2 className="mb-6 text-center">Sign in to your account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[13px] text-muted-foreground block mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full h-10 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
                required
              />
            </div>

            <div>
              <label className="text-[13px] text-muted-foreground block mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-10 px-3 bg-white rounded text-[14px]"
                style={{ border: "0.5px solid rgba(0,0,0,0.12)" }}
                required
              />
            </div>

            <div className="flex items-center justify-between text-[13px]">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <a href="#" className="text-[#3b82f6] hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white h-10 rounded text-[14px] hover:opacity-90 transition-opacity"
              style={{ fontWeight: 500 }}
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 pt-6 text-center text-[12px] text-muted-foreground" style={{ borderTop: "0.5px solid rgba(0,0,0,0.08)" }}>
            <p>Need help? Contact your system administrator</p>
          </div>
        </div>

        <div className="text-center mt-6 text-[12px] text-muted-foreground">
          <p>© 2026 Artivus Systems. All rights reserved.</p>
          <p className="mt-1">Version 2.1.4</p>
        </div>
      </div>
    </div>
  );
}
