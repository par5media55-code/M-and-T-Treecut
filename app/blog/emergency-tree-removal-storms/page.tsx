export const metadata = {
  title: 'Emergency Tree Removal: What to Do After a Storm | M&T Treecut',
  description: 'Step-by-step guide on what to do when a tree falls on your property during a North West storm. Emergency tree removal advice from M&T Treecut.',
};

export default function ArticlePage() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-20">
      <div className="text-am-gold text-[10px] uppercase tracking-widest font-bold mb-4">Emergency Services • December 28, 2023</div>
      <h1 className="text-4xl font-serif text-white mb-6">Emergency Tree Removal: What to Do After a Storm</h1>
      
      <p className="text-am-wood leading-relaxed mb-6">
        North West storms can cause significant damage to trees, leaving fallen branches or even entire trees across your property. Knowing what to do in these situations can prevent further damage and keep your family safe.
      </p>

      <h2 className="text-2xl font-serif text-white mt-10 mb-4">Immediate Safety Steps</h2>
      <ol className="text-am-wood space-y-3 mb-6 list-decimal pl-6">
        <li><strong className="text-white">Ensure everyone is safe</strong> – Evacuate the area if the tree is on a structure or power lines.</li>
        <li><strong className="text-white">Stay away from power lines</strong> – Assume any downed line is live and contact Eskom.</li>
        <li><strong className="text-white">Document the damage</strong> – Take photos for insurance claims.</li>
        <li><strong className="text-white">Call professionals</strong> – Don't attempt to remove large trees yourself.</li>
      </ol>

      <h2 className="text-2xl font-serif text-white mt-10 mb-4">Why Professional Help Matters</h2>
      <p className="text-am-wood leading-relaxed mb-6">
        Fallen trees can be under tension, with branches ready to spring back. Professionals have the equipment and training to remove trees safely without causing further damage to your property.
      </p>

      <h2 className="text-2xl font-serif text-white mt-10 mb-4">M&T Treecut Emergency Services</h2>
      <p className="text-am-wood leading-relaxed mb-6">
        We offer 24/7 emergency call-outs across North West Province. When storms strike, our team is ready to respond quickly and safely.
      </p>

      <div className="bg-am-green-dark/30 border border-am-gold p-6 mt-10">
        <p className="text-white font-bold mb-2">24/7 Emergency Tree Removal</p>
        <p className="text-am-wood text-sm mb-4">Storm damage? Don't wait. Call M&T Treecut immediately.</p>
        <a href="tel:0790642188" className="text-am-gold font-mono text-lg">079 064 2188</a>
      </div>
    </article>
  );
}
