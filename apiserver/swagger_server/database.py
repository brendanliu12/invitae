import os
import pandas as pd

df = pd.read_csv(os.environ["DATABASE_URI"], sep="\t")

def find_variants_by_gene(gene=None):
    """function that finds all variants for a particular gene

       Args:
           gene: The gene we are going to look for variants on

       Returns:
           A dictionary with all the variants on a particular gene

       """
    if gene is None:
        return df
    return df[df["Gene"] == gene]

def find_genes_by_gene_prefix(gene_prefix=None):
    """function that finds all genes that start with a prefix

       Args:
           gene_prefix: Will find all genes starting with this gene_prefix

       Returns:
           A list with all the genes that start the with gene_prefix

       """
    s = df["Gene"].drop_duplicates()
    if gene_prefix is None:
        return s
    return s[s.str.startswith(gene_prefix, na=False)]
