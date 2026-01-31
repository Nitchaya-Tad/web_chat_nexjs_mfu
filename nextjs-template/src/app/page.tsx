import InputSection from "@/components/InputSection";

export default function Home() {
  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <main style={{ width: '100%', maxWidth: '600px' }}>
          <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Welcome</h1>
        <InputSection />
      </main>
    </div>
  );
}
