import urllib3
import unittest
import json


class TestAPIMethods(unittest.TestCase):

    def test_all_genes(self):
        http = urllib3.PoolManager()
        r = http.request('GET', 'http://ec2-18-216-144-242.us-east-2.compute.amazonaws.com/invitae/bliu/variant')
        self.assertEqual(len(json.loads(r.data)), 48515)

    def test_one_gene(self):
        http = urllib3.PoolManager()
        r = http.request('GET', 'http://ec2-18-216-144-242.us-east-2.compute.amazonaws.com/invitae/bliu/variant?gene=ENG')
        self.assertEqual(len(json.loads(r.data)), 69)

    def test_no_genes(self):
        http = urllib3.PoolManager()
        r = http.request('GET', 'http://ec2-18-216-144-242.us-east-2.compute.amazonaws.com/invitae/bliu/variant?gene=fakeGene')
        self.assertEqual(len(json.loads(r.data)), 0)

    def test_prefix_c(self):
        prefix = "C"
        http = urllib3.PoolManager()
        r = http.request('GET', 'http://ec2-18-216-144-242.us-east-2.compute.amazonaws.com/invitae/bliu/gene?gene_prefix=' + prefix)
        allMatch = True
        genes = json.loads(r.data)
        for gene in genes:
            if not gene.startswith(prefix):
                allMatch = False
        self.assertTrue(allMatch)

    def test_prefix_a(self):
        prefix = "A"
        http = urllib3.PoolManager()
        r = http.request('GET', 'http://ec2-18-216-144-242.us-east-2.compute.amazonaws.com/invitae/bliu/gene?gene_prefix=' + prefix)
        allMatch = True
        genes = json.loads(r.data)
        for gene in genes:
            if not gene.startswith(prefix):
                allMatch = False
        self.assertTrue(allMatch)


if __name__ == '__main__':
    unittest.main()

