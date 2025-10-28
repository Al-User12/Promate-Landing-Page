export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-line">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Promate</h3>
            <p className="text-brand-muted text-sm">
              Custom Karpet Mobil Premium Tangerang
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Kontak</h4>
            <div className="space-y-2 text-sm text-brand-muted">
              <p>WhatsApp: +62 812-3456-7890</p>
              <p>Email: info@promatesupplier.id</p>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Alamat</h4>
            <p className="text-sm text-brand-muted">
              Puchin Soho Retail No.3A<br />
              Jl. K.H. Hasyim Ashari<br />
              Ciputat Barat, Tangerang
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-line text-center text-sm text-brand-muted">
          <p>&copy; {new Date().getFullYear()} Promate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

