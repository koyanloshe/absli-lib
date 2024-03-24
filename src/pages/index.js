import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-10 offset-md-1">
            <div className="row align-items-md-stretch">
              <div className="col-md-12">
                <div className="h-100 p-5 text-white border rounded-3">
                  <h2>Table of Contents</h2>
                  <p>List of all components</p>
                  <Link href="/typography">Typography</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
