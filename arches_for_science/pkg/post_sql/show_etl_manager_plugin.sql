update plugins set config = jsonb_set(config,'{show}','true') where componentname = 'etl-manager';