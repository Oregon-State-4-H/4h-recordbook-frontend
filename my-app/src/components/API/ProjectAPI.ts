export interface CustomProjectFields {
    description: string,
    end_date: Date,
    name: string,
    start_date: Date,
    type: string,
    year: string,
}

export type Project = CustomProjectFields & {
    id: string,
    user_id: string,
    created: string,
    updated: string,
}

export const fetchAllProjects = async (): Promise<Project[]> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
            method: 'GET',
            credentials: 'include'
        });

        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message || "Unexpected error occurred");
        }
        return data.projects as Project[];
        
    }
    catch (error) {
        throw error;
    }
}

export const fetchProject = async (projectID: string): Promise<Project> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${projectID}`, {
            method: 'GET',
            credentials: 'include'
        });

        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message || "Unexpected error occurred");
        }
        return data.project as Project;

    }
    catch (error) {
        throw error;
    }
}

export const postProject = async (project: CustomProjectFields) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(project),
        });

        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message || "Unexpected error occurred");
        }
        return true;

    }
    catch (error) {
        throw error;
    }
}

export const updateProject = async (projectID: string, project: CustomProjectFields) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${projectID}`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(project),
        });

        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message || "Unexpected error occurred");
        }
        return true;

    }
    catch (error) {
        throw error;
    }
}

export const deleteProject = async (projectID: string) => {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${projectID}`, {
            method: 'DELETE',
            credentials: 'include'
        });

        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message || "Unexpected error occurred");
        }
        return true;

    }
    catch (error) {
        throw error;
    }

}