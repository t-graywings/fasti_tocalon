import * as Express from 'express';
import * as Docker from 'dockerode';

function list(req: Express.Request, res: Express.Response, next: Express.NextFunction){
    const docker = new Docker({socketPath: '/run/docker.sock'});
    docker.listImages((err: any, containers: Docker.ImageInfo[]) => {
        let containerList = containers.map(image => 
            {return {id: image.Id, tags: image.RepoTags}
        });
        res.send(containerList);
    })
}

export default{
  list: list
}