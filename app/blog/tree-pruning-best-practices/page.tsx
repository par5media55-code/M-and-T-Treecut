export const metadata = {
  title: 'Tree Pruning Best Practices for North West Climate | M&T Treecut',
  description: 'Expert tips on when and how to prune trees in North West Province to promote health and prevent storm damage. Professional advice from M&T Treecut.',
};

export default function ArticlePage() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-20">
      <div className="text-am-gold text-[10px] uppercase tracking-widest font-bold mb-4">Tree Care • January 5, 2024</div>
      <h1 className="text-4xl font-serif text-white mb-6">Tree Pruning Best Practices for North West Climate</h1>
      
      <p className="text-am-wood leading-relaxed mb-6">
        North West Province's hot summers and seasonal storms mean trees need specific care to stay healthy and safe. Proper pruning not only improves the appearance of your trees but also prevents dangerous branch failures during storms.
      </p>

      <h2 className="text-2xl font-serif text-white mt-10 mb-4">When to Prune</h2>
      <p className="text-am-wood leading-relaxed mb-6">
        The best time to prune most trees in North West is during late winter (June-July) when trees are dormant. However, dead or dangerous branches can be removed at any time. Avoid heavy pruning during the peak of summer heat.
      </p>

      <h2 className="text-2xl font-serif text-white mt-10 mb-4">The 3-Cut Method for Large Branches</h2>
      <p className="text-am-wood leading-relaxed mb-6">
        For branches thicker than a wrist, always use the three-cut method to prevent bark tearing: make an undercut 30cm from the trunk, a further cut to remove the branch, then a final cut just outside the branch collar.
      </p>

      <h2 className="text-2xl font-serif text-white mt-10 mb-4">Common Pruning Mistakes</h2>
      <ul className="text-am-wood space-y-3 mb-6 list-disc pl-6">
        <li><strong className="text-white">Topping</strong> – Cutting the main leader destroys the tree's natural structure and leads to weak regrowth.</li>
        <li><strong className="text-white">Flush cutting</strong> – Cutting too close to the trunk prevents proper healing.</li>
        <li><strong className="text-white">Over-pruning</strong> – Removing more than 25% of the canopy in one season stresses the tree.</li>
      </ul>

      <div className="bg-am-green-dark/30 border border-am-gold p-6 mt-10">
        <p className="text-white font-bold mb-2">Professional Pruning Services</p>
        <p className="text-am-wood text-sm mb-4">Keep your trees healthy and safe with professional pruning from M&T Treecut.</p>
        <a href="tel:0790642188" className="text-am-gold font-mono text-lg">079 064 2188</a>
      </div>
    </article>
  );
}
