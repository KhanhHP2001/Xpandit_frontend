import { S3Client } from "@aws-sdk/client-s3";

class S3Singleton {
  private static instance: S3Singleton;
  private s3Client: S3Client;

  private constructor(region: string, accessKeyId: string, secretAccessKey: string) {
    this.s3Client = new S3Client({
      region: region,
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
      },
    });
  }

  public static getInstance(): S3Singleton {
    if (!S3Singleton.instance) {
      const region = 'ap-southeast-1';
      const accessKeyId = 'AKIAVHPQYN7SQDSOWQPW';
      const secretAccessKey = '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';
      S3Singleton.instance = new S3Singleton(region ?? '', accessKeyId ?? '', secretAccessKey ?? '');
    }
    return S3Singleton.instance;
  }

  public getS3Client(): S3Client {
    return this.s3Client;
  }
}

// Usage:
const s3Instance = S3Singleton.getInstance();
export const s3Client = s3Instance.getS3Client();
