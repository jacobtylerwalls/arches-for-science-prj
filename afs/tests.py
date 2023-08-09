from django.core.management import call_command

from django.test import TestCase
from django.test.client import Client
from django.urls import reverse

from arches.app.utils.betterJSONSerializer import JSONSerializer
from arches.app.models.models import ResourceInstance

def setUpModule():
    call_command("packages", "-o load_package -s afs/pkg -y".split())


class AnalysisAreaAndSampleTakingTests(TestCase):
    def test_create_delete_analysis_area(self):
        client = Client()
        client.login(username="ben", password="Test12345!")

        transaction_id = "10000000-1000-1000-1000-100000000000"
        graph_id = "9519cb4f-b25b-11e9-8c7b-a4d18cec433a"
        part_identifier_assignment = "b240c366-8594-11ea-97eb-acde48001122"
        collection_resource =  "54bf1022-a0b8-4f95-a5e9-82c084b2f53"

        r = ResourceInstance(graph_id=graph_id)
        r.save()
        self.addCleanup(r.delete)
        parent_phys_thing = str(r.pk)

        create_data = {
            "transaction_id": transaction_id,
            "parentPhysicalThingResourceid": parent_phys_thing,
            "collectionResourceid": collection_resource,
            "partIdentifierAssignmentTileData": JSONSerializer().serialize(
                {part_identifier_assignment: []}
            ),
            "analysisAreaName": "Test Analysis Area",
        }
        response = client.post(reverse("saveanalysisarea"), create_data)

        self.assertEqual(response.status_code, 200)

        delete_data = {
            "transaction_id": transaction_id,
            "parentPhysicalThingResourceid": parent_phys_thing,
            "parentPhysicalThingTileData": JSONSerializer().serialize(
                {parent_phys_thing: []}
            ),
            "partIdentifierAssignmentTileData": JSONSerializer().serialize(
                {part_identifier_assignment: []}
            ),
        }
        response = client.post(reverse("deleteanalysisarea"), delete_data)

        self.assertEqual(response.status_code, 200)
