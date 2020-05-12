import logging
import os
import shutil
from afs.settings import CANTALOUPE_DIR, MEDIA_ROOT
from arches.app.functions.base import BaseFunction
from arches.app.models import models


details = {
    "name": "File to IIIF",
    "type": "node",
    "description": "copies uploaded files into a directory reserved for local Cantaloupe host (for IIIF hosting)",
    "defaultconfig": {"selected_nodegroup": ""},
    "classname": "FileToIIIF",
    "component": "views/components/functions/file-to-iiif",
    "functionid": "210519e3-ee55-460a-ab6d-0b56e1b5ba3a",
}

logger = logging.getLogger(__name__)

class FileToIIIF(BaseFunction):
    def postSave(self, tile, request):

        acceptable_types = ["jpg", "jpeg", "tiff", "tif", "png"]
        files = list(models.File.objects.filter(tile=tile))
        resource = Resource.objects.get(resourceinstanceid=tile.resourceinstance_id)
        name = resource.displayname
        desc = resource.displaydescription

        for f in files:
            if any(ac == (f.path.name.split(".")[-1]) for ac in acceptable_types):
                dest = os.path.join(CANTALOUPE_DIR, os.path.basename(f.path.url))
                file_url = CANTALOUPE_HTTP_ENDPOINT + "iiif/2/"+ f.path.name.split("/")[-1] + "/info.json"
                # reformat dest with cantaloupe ip address
                logger.info("copying file to local dir")
                shutil.copyfile(os.path.join(MEDIA_ROOT, f.path.name), dest)
                manifest = models.IIIFManifest.objects.create(label=name, description=desc, url=file_url)
                manifest.save()

            else:
                logger.warn("filetype unacceptable: " + f.path.name)

    def on_import(self, tile):
        raise NotImplementedError

    def after_function_save(self, tile, request):
        raise NotImplementedError

    def get(self):
        raise NotImplementedError
